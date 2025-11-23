export interface CardProps{
    title: string;
    content: string;
}

export interface ButtonProps{
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
    children: React.ReactNode;//for accepting different names...
    className?: string;
}

export interface PostProps{
    title: string;
    content: string;
    userId: string;
}

export interface Geo {
    lat: string; //optional...
    lng: string; //optional...
}

export interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface Company{
    name: string;
    catachPhrase: string;
    bs: string;
}

export interface UserProps{
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    geo: Geo;
    phone: string;
    website: string;
    company: Company;
}
