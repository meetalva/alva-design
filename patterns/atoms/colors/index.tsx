export type RGB = [number, number, number];
export interface ColorOptions {
	alpha?: number;
	displayName: string;
	rgb: RGB;
}

export class Color {
	public readonly alpha: number = 1;
	public readonly displayName: string;
	public readonly rgb: RGB;

	public constructor(options: ColorOptions) {
		this.displayName = options.displayName;
		this.rgb = options.rgb;

		if (options.alpha) {
			this.alpha = Math.max(0, Math.min(1, options.alpha));
		}
	}

	public toString(format: 'rgb' | 'hex' = 'rgb', options?: { alpha?: number }): string {
		const hasAlpha = options && typeof options === `object` && typeof options.alpha === `number`;
		const alpha = options && hasAlpha ? options.alpha : undefined;
		return !hasAlpha && format === 'hex'
			? this.toHexString()
			: this.toRGBString(alpha);
	}

	public toRGBString(alpha?: number): string {
		const a = typeof alpha === `number` ? alpha : this.alpha;
		return a === 1
			? `rgb(${this.rgb.join(', ')})`
			: `rgba(${this.rgb.join(', ')}, ${a})`;
	}

	public toHexString(): string {
		const [r, g, b] = this.rgb.map((d) => this.hexDigit(d));

		return this.alpha === 1
			? `#${r}${g}${b}`
			: `#${r}${g}${b}${this.hexDigit(this.alpha * 255)}`;
	}

	protected hexDigit(d: number): string {
		const digit = Math.floor(d).toString(16).slice(-2);

		return digit.length === 2 ? digit : `0${digit}`;
	}
}

const colors = {
	black: new Color({
		displayName: 'Black',
		rgb: [0, 0, 0]
	}),
	blackAlpha70: new Color({
		alpha: 0.7,
		displayName: 'Black Alpha 70',
		rgb: [0, 0, 0]
	}),
	green: new Color({
		displayName: 'Green',
		rgb: [0, 153, 0]
	}),
	grey: new Color({
		displayName: 'Dark Grey',
		rgb: [76, 76, 76]
	}),
	grey05: new Color({
		displayName: 'Grey 05',
		rgb: [242, 242, 242]
	}),
	grey10: new Color({
		displayName: 'Grey 10',
		rgb: [229, 229, 229]
	}),
	grey15: new Color({
		displayName: 'Grey 15',
		rgb: [217, 217, 217]
	}),
	grey20: new Color({
		displayName: 'Grey 20',
		rgb: [204, 204, 204]
	}),
	grey30: new Color({
		displayName: 'Grey 30',
		rgb: [179, 179, 179]
	}),
	grey40: new Color({
		displayName: 'Grey 40',
		rgb: [153, 153, 153]
	}),
	grey50: new Color({
		displayName: 'Grey 50',
		rgb: [128, 128, 128]
	}),
	grey60: new Color({
		displayName: 'Grey 60',
		rgb: [102, 102, 102]
	}),
	grey70: new Color({
		displayName: 'Grey 70',
		rgb: [76, 76, 76]
	}),
	grey80: new Color({
		displayName: 'Grey 80',
		rgb: [51, 51, 51]
	}),
	grey90: new Color({
		displayName: 'Grey 90',
		rgb: [26, 26, 26]
	}),
	red: new Color({
		displayName: 'Red',
		rgb: [187, 10, 48]
	}),
	silver: new Color({
		displayName: 'Silver',
		rgb: [186, 180, 173]
	}),
	white: new Color({
		displayName: 'White',
		rgb: [255, 255, 255]
	}),
	yellow: new Color({
		displayName: 'Yellow',
		rgb: [255, 170, 0]
	})
};

export default colors;