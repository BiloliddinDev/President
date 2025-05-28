// "use client"
//
// import Image from "next/image";
// import {useState} from "react";
// import Placeholder from "@/public/images/placeholder.png";
// import B2bImage from "@/public/images/b2b-image.png";
// import {Button} from "@/components/ui/button";
// import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
//
// export const B2bCard = ({className}: { className?: string }) => {
//     const [selectedImage, setSelectedImage] = useState<string | null>(null);
//     const [bgColor, setBgColor] = useState<string>('bg-indigo-300');
//     const [position, setPosition] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('bottom-right');
//
//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => setSelectedImage(reader.result as string);
//             reader.readAsDataURL(file);
//         }
//     };
//
//     const positionClasses: Record<typeof position, string> = {
//         'top-left': 'top-5 left-5',
//         'top-right': 'top-5 right-5',
//         'bottom-left': 'bottom-5 left-5',
//         'bottom-right': 'bottom-5 right-5',
//     };
//
//     return (
//         <div className={`flex flex-col md:flex-row gap-10 ${className}`}>
//             {/* Left */}
//             <div>
//                 <h2 className="text-primary text-lg font-medium mb-5">Personalization</h2>
//                 <p className="text-sm text-zinc-600 w-[300px] md:w-[450px]">
//                     Upload your logo, choose background color, and select its position on the product.
//                 </p>
//
//                 {/* Upload */}
//                 <div className="mt-6 flex items-center gap-4 p-4 bg-white rounded border">
//                     <Image src={Placeholder} alt="placeholder" width={96} height={96}/>
//                     <div>
//                         <p className="text-sm text-primary mb-2">Max file size 3MB</p>
//                         <input id="image" type="file" className="hidden" onChange={handleImageChange}/>
//                         <label htmlFor="image" className="flex gap-2 items-center cursor-pointer">
//                             <span>{selectedImage ? "File uploaded" : "No file chosen"}</span>
//                             <Button variant="secondary" className="px-3">Choose File</Button>
//                         </label>
//                     </div>
//                 </div>
//
//                 {/* Background Colors */}
//                 <div className="mt-6">
//                     <p className="mb-2">Choose a background color:</p>
//                     <RadioGroup
//                         defaultValue="indigo"
//                         className="flex gap-2"
//                         onValueChange={(value) => {
//                             const colorMap = {
//                                 indigo: 'bg-indigo-300',
//                                 amber: 'bg-amber-200',
//                                 gray: 'bg-neutral-400',
//                             };
//                             setBgColor(colorMap[value as keyof typeof colorMap]);
//                         }}
//                     >
//                         {['indigo', 'amber', 'gray'].map(color => (
//                             <RadioGroupItem
//                                 key={color}
//                                 value={color}
//                                 className={`w-6 h-6 rounded-full border-2 border-transparent bg-${color}-300 data-[state=checked]:outline outline-1`}
//                             />
//                         ))}
//                     </RadioGroup>
//                 </div>
//
//                 {/* Image Position */}
//                 <div className="mt-6">
//                     <p className="mb-2">Logo Position:</p>
//                     <select
//                         className="border px-3 py-1 rounded text-sm"
//                         onChange={(e) => setPosition(e.target.value as any)}
//                         value={position}
//                     >
//                         <option value="top-left">Top Left</option>
//                         <option value="top-right">Top Right</option>
//                         <option value="bottom-left">Bottom Left</option>
//                         <option value="bottom-right">Bottom Right</option>
//                     </select>
//                 </div>
//             </div>
//
//             {/* Right: Preview */}
//             <div
//                 className={`relative w-[300px] h-[240px] md:w-[555px] md:h-[445px] rounded-md overflow-hidden border ${bgColor}`}>
//                 <Image src={B2bImage} alt="Base Image" fill className="object-cover"/>
//                 {selectedImage && (
//                     <Image
//                         src={selectedImage}
//                         alt="Uploaded"
//                         width={100}
//                         height={100}
//                         className={`absolute ${positionClasses[position]} w-24 h-24 object-contain bg-white/70 p-1 rounded`}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };
