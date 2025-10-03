export interface SanityImage {
	asset: {
		url: string;
		metadata: {
			dimensions: {
				aspectRatio: number;
				height: number;
				width: number;
			};
		};
	};
}

export interface Category {
	_id: string;
	title: string;
	description: string | null;
}

export interface Icon {
	name: string;
}

export interface Language {
	_id: string;
	title: string;
	icon: Icon;
}

export interface Project {
	title: string;
	slug: {
		current: string;
	};
	href: string;
	github: string;
	category: Category;
	languages: Language[];
	mainImage: SanityImage;
}
