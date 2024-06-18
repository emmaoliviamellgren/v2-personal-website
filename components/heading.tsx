import { HeadingProps } from "@/types";
import { Bullet } from "./icons";

const Heading = ({ contentTitle }: HeadingProps) => {
    return (
        <div className="pt-16 pb-5 md:pt-12 md:pb-2 lg:pt-16 lg:pb-4">
            <div className='flex items-center gap-2'>
                <span>
                    <Bullet />
                </span>
                <p className='text-primary'>{contentTitle}</p>
            </div>
        </div>
    );
};

export default Heading;
