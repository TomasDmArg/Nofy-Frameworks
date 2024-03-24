import { AllowedButtonsArray } from "@/types/frames";
import { Button } from "frames.js/next"

interface StartProps {
    characterId: string;
}

export const Collect = ({ characterId }: StartProps) => {
    return (
        <div tw="bg-white text-slate-800 w-full px-12 h-full text-center justify-center items-center flex flex-col">
            <h3 className="text-slate-800 font-lg">  
                Character added successfully!
            </h3>
            <img src={`${process.env.BASE_URL}/scripts/characters/${characterId}.png`} alt="NOF" width={200} height={200} />
        </div>
    )
}

export const CollectButtons: AllowedButtonsArray = [
    <Button
        key={0}
        action="post"
        target={{
            query: { pageIndex: 3 },
        }}
    >
        Back
    </Button>,
    <Button
        key={1}
        action="post"
        target={{
            query: { pageIndex: 6 },
        }}
    >
        Inventory
    </Button>,
    <Button
        key={2}
        action="post"
        target={{
            query: { pageIndex: 8 },
        }}
    >
        Missing
    </Button>,
];