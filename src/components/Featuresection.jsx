import FeatureBox from '../components/Featurebox';

export default function Featuresection() {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 2xl:gap-[52px] sm:max-w-[1360px] flex-wrap">
                <FeatureBox day="- 1" title="Book & Scope" description="We define your MVP’s must-haves on a quick call." />
                <FeatureBox day="1-2" title="Build & Review" description="Our team builds while you relax. On Day 2, we show you a live demo." />
                <FeatureBox day="- 3" title="Launch & Handoff" description="Our MVP goes live. You get everything — code & clarity." />
            </div>
        </>
    )
}
