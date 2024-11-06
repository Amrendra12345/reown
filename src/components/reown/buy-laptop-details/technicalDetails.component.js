import React from 'react'

const TechnicalDetailsComponent = ({product}) => {
    return (
        <div className='technicalDetails'>
            <div className='pageTitle' style={{ justifyContent: 'flex-start' }}>
                <p>Technical Details</p>
            </div>
            <div className='table-responsive'>
                <table className="table">
                    <tbody><tr>
                        <td> Brand </td>
                        <td>{product.product_make}</td>
                    </tr>
                        <tr>
                            <td>Processor</td>
                            <td>{product.processor}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{product.ram}</td>
                        </tr>
                        <tr>
                            <td>Hard Disk</td>
                            <td>{product.hdd}</td>
                        </tr>
                    {
                        Object.entries(product.details).map((detail)=>{
                            return (<tr key={detail[0]}>
                                <td>{detail[0].split('_').join(' ').toLowerCase().replace(/\b[a-z]/g, function(letter) {
                                    return letter.toUpperCase();
                                })}</td>
                                <td>{detail[1]}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TechnicalDetailsComponent