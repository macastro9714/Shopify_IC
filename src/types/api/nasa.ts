/* eslint-disable camelcase */
// Data that comes from api, we do not control camelcase

export type Data = {
    description: string;
    title: string;
    keywords: string[];
    nasa_id: string;
    media_type: string;
    date_created: string;
    center: string;
};

export type link = {
    href: string;
    rel: string;
    render?: string;
};

export type Item = {
    href: string;
    data: Data[];
    links?: link[];
};

export type Metadata = {
    total_hits: number;
};

export type ImageNasaAPIResponse = {
    collection: {
        version: string;
        href: string;
        items: Item[];
        metadata: Metadata;
        links: link[];
    };
};
