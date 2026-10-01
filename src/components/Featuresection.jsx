import FeatureBox from '../components/Featurebox';

export default function Featuresection() {
    return (
        <>
            <div className="flex justify-center items-center gap-8 w-[80%]">
                <FeatureBox day="- 1" title="Book & Scope" description="We define your MVP’s must-haves on a quick call." />
                <FeatureBox day="1-2" title="Build & Review" description="Our team builds while you relax. On Day 2, we show you a live demo." />
                <FeatureBox day="- 3" title="Launch & Handoff" description="Our MVP goes live. You get everything — code & clarity." />
            </div>
        </>
    )
}
