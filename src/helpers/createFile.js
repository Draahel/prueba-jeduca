
import { saveAs } from 'file-saver';

export const createFile = (data) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
    });
    saveAs(blob, 'mi-archivo.txt')
  }