import Image from "next/image";
const HomeGrowthStory = (props) => {
    return <section className="growthStory">
            <div className="container">
                <div className="heading">
                   <h2>Growth Story</h2>
                </div>
                <div className="growthStory_wrap">
                    <Image src="/images/growth-story.svg" className="img-fluid" alt="recycledevice company story" width={1920} height={1080} />
                </div>
            </div>
        </section>
}

export default HomeGrowthStory