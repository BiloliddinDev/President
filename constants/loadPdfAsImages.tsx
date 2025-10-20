
// import * as pdfjsLib from "pdfjs-dist";
// import "pdfjs-dist/build/pdf.worker.entry"; // worker yuklash

// export const loadPdfAsImages = async (pdfUrl: string) => {
//     const loadingTask = pdfjsLib.getDocument(pdfUrl);
//     const pdf = await loadingTask.promise;

//     const pages: { id: number; pageImg: string; alt: string }[] = [];

//     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//         const page = await pdf.getPage(pageNum);

//         const viewport = page.getViewport({ scale: 2 }); // sifatini oshirish
//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d")!;
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         await page.render({
//             canvasContext: context,
//             viewport: viewport,
//         }).promise;

//         const imageDataUrl = canvas.toDataURL("image/png");
//         pages.push({
//             id: pageNum,
//             pageImg: imageDataUrl,
//             alt: `Page ${pageNum} of the book`,
//         });
//     }

//     return pages;
// };
