import { multitext } from "src/app/common/hub-translator";
import { SharedService } from 'src/app/common/shared.service';

export interface Brew {
    id: string;
    name: string;
    description: multitext;
    imageUrl: string;
    count: number;
}

export function parseBrew(json: {[key: string]: any}): Brew {
    return {
        id: json['id'],
        name: json['name'],
        description: json['description'],
        imageUrl: SharedService.BaseAssetUrl + json['image_url'],
        count: json['count'],
    } as Brew;
}