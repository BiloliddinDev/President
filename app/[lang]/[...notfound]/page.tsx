import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="container flex  justify-center items-center gap-[100px] h-screen">
            <div className="flex justify-start items-start gap-96">
                <div
                    className="text-center justify-start text-gray-900 text-5xl font-normal font-['Inter'] leading-[60px]">404
                    Error Page 
                </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-7">
                <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                    <div
                        className="self-stretch justify-start text-gray-900 text-xl font-medium font-['Inter'] leading-loose">Sorry,
                        we could not find the page you were looking for.
                    </div>
                    <div
                        className="w-[568px] justify-start text-gray-900 text-lg font-medium font-['Inter'] leading-7">It
                        may have been removed, changed or is temporarily unavailable. Please return to our home page to
                        continue browsing our site or discover the products selected for you.
                    </div>
                </div>
                <div data-state="Default" data-type="default"
                     className="w-64 px-4 py-2 bg-slate-900 rounded inline-flex justify-center items-center gap-2.5">
                  <Button>Go to Home</Button>
                </div>
            </div>
        </div>
    );
}
