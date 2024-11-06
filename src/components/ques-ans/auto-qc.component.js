import {useState, useRef, useEffect, useContext} from 'react';
import {getLaptopDetails, initiateLaptopDiagnostics} from "@/frontend-libs/webapi_lib";
import {get_visitor_bit, get_visitor_browser, get_visitor_os} from "@/frontend-libs/helpers";
import {QuestionAnswersContext} from "@/context/question-answers.context";
import {useRouter} from "next/router";



const QcSoftwareComponent = (props) => {
    const Ref = useRef(null);
    const router = useRouter()
    const [timer, setTimer] = useState('00:00');
    const [downloadError, setDownloadError] = useState("")
    const [timerExpired, setTimerExpired] = useState(false)
    const [startDownload, setStartDownload ] = useState(false)
    const {autoQCData, setAutoQCData, dCode, setDCode, answersSet, setAnswerSet, setVariantSlug} = useContext(QuestionAnswersContext)
    const [autoQcNotFound, setAutoQCNotFound] = useState(false)

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }else{
            setTimerExpired(true)
            if(Ref.detailTimer)
                clearInterval(Ref.detailTimer)
        }
    }
    const clearTimer = (e) => {
        setTimer('10:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 600);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


    const handleBackClick = () => {
        if(Ref.current)
            clearInterval(Ref.current)
        if(Ref.detailTimer)
            clearInterval(Ref.detailTimer)
        setDCode(null)
        setAutoQCData(null)
        props.toggleAutoQC()
    }

    const moveToNext = (variant_slug) => {
        if(Ref.current)
            clearInterval(Ref.current)
        if(Ref.detailTimer)
            clearInterval(Ref.detailTimer)
        props.toggleAutoQC()
        router.push("/sell/" + variant_slug)
    }


    const downloadSoftware = async () => {
        const osVersion = get_visitor_os()
        const result = await initiateLaptopDiagnostics(osVersion, get_visitor_browser(), get_visitor_bit(), props.variant_slug)
        if(result.status==200){
            if (osVersion == "macos") {
                window.location.href = 'https://cdn.recycledevice.com/downloads/executables/laptop_auto_qc/macos/recycledevice.zip';
            } else if (osVersion == 'linux') {

                window.location.href = 'https://cdn.recycledevice.com/downloads/executables/laptop_auto_qc/linux/recycledevice.zip';
            } else if (osVersion == "windows<7_32" || osVersion == "windows<7_64" || osVersion == "windows>7_32" || osVersion == "windows>7_64") {

                window.location.href ='https://cdn.recycledevice.com/downloads/executables/laptop_auto_qc/win/recycledevice.exe';
            }
            setStartDownload(true)
            setDownloadError('')
            setDCode('F9E6AD')
            Ref.detailTimer = setInterval(()=>{
                getLaptopData('F9E6AD') // getLaptopData(result.data.code)
            }, 10000)
        }else{
            setDownloadError(result.message)
        }
    }

    const regenerate = async () => {
        setTimerExpired(false)
        setDCode(null)
        await downloadSoftware()
    }

    const getLaptopData = async(code)=>{
        const result = await getLaptopDetails(code)
        if(result.status == 200){
            if (result.data.details.auto_qc_status != 'pending') {
                let pc_name = result.data.details.pc_name;
                let processorname = result.data.details.processor_name;
                let ram_name = result.data.details.ram_name;
                let harddisk = result.data.details.hdd_name;
                let gpu = result.data.details.graphics_name;
                let variant_slug = result.data.details.variant_slug;
                if(processorname == null || variant_slug == null){
                    setAutoQCNotFound(true)
                }else{
                    let qcdata = {
                        cpu_model:processorname,
                        ram:ram_name,
                        internal_storage:harddisk,
                        gpu:gpu,
                        code:'F9E6AD',
                        variant_slug:variant_slug
                    }
                    setAutoQCData(qcdata)
                    let new_answer_set = Object.assign({}, answersSet)
                    new_answer_set['cpu_model'] = processorname
                    new_answer_set['ram'] = ram_name
                    new_answer_set['internal_storage'] = harddisk
                    new_answer_set['gpu'] = gpu
                    setAnswerSet(new_answer_set)
                    setVariantSlug(variant_slug)
                    moveToNext(variant_slug)
                }
            }
        }
    }


    return (
        <div className='qcsoftware'>
            <div className="qcsoftware__title">
                <div className='heading_1'>
                    <h1>Download QC Software</h1>
                </div>
                <button type='button' className='btn-back'></button>
            </div>
            <div className='qcsoftware__content'>
                <p>Download and run our advanced QC software to get best value for your computer.</p>
                <p>The software evaluates your {`computer's`} system configuration and hardware functional faults. Be assured, no personal information including any files or media stored on your computer is scanned or accessed by the software making it completly safe to use.</p>
                <p>Recycledevice is the only buyback company in market which provides this software to its customers for self evaluation and knowing the true value of your old computer.</p>
            </div>            
            {
                !startDownload?(<>
                    <div className='btn-download'>
                        <button type='button' className='btn btn-orange' onClick={downloadSoftware}>Click to Downloaded</button>
                        <div className="error">{downloadError}</div>
                    </div>
                </>):(<>
                    {!autoQcNotFound?(
                        <>{!timerExpired?(  
                            <div className='runQc'>                     
                                <div className='pageTitle'>
                                    <p>Run QC Diagnosis Software and enter Order ID</p>
                                </div>
                                <div className='qc_Code'>
                                    <p className={styles.codetext}> { dCode }</p>
                                </div>
                                <div className="timerContainer">
                                   <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                        <p>{timer}</p>
                                 </div>
                                <p className="pleaseWait">Please wait until QC is complete, please do not close or refresh this page</p>
                            </div>
                       
                      ):(<>
                       
                            <div className="text-center">
                                <p><strong>Unable to detect your device, please re-try running software or proceed manually</strong></p>
                            </div>
                       
                        <div className='text-center'>
                            <a variant="danger" className='btn-submit' onClick={regenerate}>Click to Regenerate</a>
                            <a variant="danger" className='btn-submit ms-1'  onClick={handleBackClick}>Continue Manually</a>
                        </div>
                    </>)}</>
                        ):(<>
                         <div className="text-center">
                            <p><strong>Unable to detect your device, please re-try running software or proceed manually</strong></p>
                         </div>
                        
                        <div className='text-center'>
                            <a variant="danger" className='btn-submit' onClick={regenerate}>Click to Regenerate</a>
                            <a variant="danger" className='btn-submit ms-1'  onClick={handleBackClick}>Continue Manually</a>
                        </div>
                    </>)}
                    </>)
            }
        </div>
    )
}

export default QcSoftwareComponent;
