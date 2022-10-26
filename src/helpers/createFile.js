
import { saveAs } from 'file-saver';

export const createFile = (data) => {
    const filename = `${data.title}-${data.n1}-${data.n2}-${data.n3}-${data.year}-${data.expiration}`;
    console.log(filename);
    const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
    });
    saveAs(blob, filename)
}