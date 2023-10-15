import type { TileData } from './$types';

const tiles: TileData[] = [
	{
		name: 'Google',
		url: 'https://www.google.com',
		favicon: 'bi bi-google'
	},
	{
		name: 'GitHub',
		url: 'https://www.github.com',
		favicon: 'bi bi-github'
	},
	{
		name: 'Discord',
		url: 'https://discord.com/app',
		favicon: 'bi bi-discord'
	},
	{
		name: 'Netflix',
		url: 'https://www.netflix.com',
		favicon: 'bi bi-fast-forward'
	},
	{
		name: 'Youtube',
		url: 'https://www.youtube.com',
		favicon: 'bi bi-youtube'
	},
	{
		name: 'ChatGPT',
		url: 'https://chat.openai.com',
		favicon: 'bi bi-robot'
	},
	{
		name: 'Spotify',
		url: 'https://open.spotify.com/',
		favicon: 'bi bi-spotify'
	},
	{
		name: 'Wakatime',
		url: 'https://www.wakatime.com',
		favicon: 'bi bi-braces-asterisk'
	}
];
export function getTiles(): TileData[] {
	return tiles;
}
