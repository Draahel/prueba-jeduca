import { N2, N3 } from "../enums/enums";

export const obtainOptions = (selected, action) => {
    let data = [];
    switch (action) {
        case 1:
            data = N2[selected] ? N2[selected] : [];
            return data
        case 2:
            data = N3[selected] ? N3[selected] : [];
            return data
        default:
            return []
    }

}