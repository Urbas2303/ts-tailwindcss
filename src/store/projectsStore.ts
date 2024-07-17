import { create } from 'zustand'
import { ProjectType } from '../types'

interface ProjectsStor {
	projects: ProjectType[]
}

export const useProjects = create<ProjectsStor>((set, get) => ({
	projects: [
		{
			id: 1,
			commentProps: {
				mainText:
					"“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”",
				imgURL:
					'https://s3-alpha-sig.figma.com/img/95b7/e5de/e97c65e943300eb776ba299886cbe09b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YNeQR71xuNFIj2Re~f1TLG3zwhVFuNBRToNGIWnE9JAz5xMxWG6nacHMBxxCQ1gv4PCxy9YwgFce6PiSmHrY~oMQ9UhbA2QXV1Ul6tUXP8M8OLqrRX8jnNDXTotU4uZ~2Ppj4d6yFzU~fYtyGSjuu6VZ8S0fgns~mmS06ai66VXO2HX~~0-RLIcnStHH3s7CKtfPUvp6aUCEXUm9fOOZTlzmK-Jka0O~scNA06JxvL1DwHdiRbIqZ7RfKTKLOpAd~JbVzFJiy4JA~0haJk1kz3CPWsbbKvo3ce8nawx1vWzZXZJMdGHAxF9lZag5hQop46TYdOYBYrQnWDe~Aywt6g__',
				name: 'Angel Armstrong',
				position: 'Founder & CEO, Google',
			},
			imgURL:
				'https://s3-alpha-sig.figma.com/img/88b0/1afd/10b7f730e4c0c46c9ced58fa997fc1d6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TwqS2Q1yrPkwUvtySfUPGEbYCAu5HHv~RRRFT2NDxrTrcaPIbeTPYw9IekLbl70jzXoV7ZIVkWtEaMKRPK0k~o1i8Hi-3v0Y9w-TuJfwOLcPeFnz2QCVsUhh2Si~-C7477ZOZTCfT4WWIyJY2iboKsTv~f3HkTcSe9w6qZWGcam2YvwDnlBMjdnBPg8fgQMaIuZNBbl4BRPixAyu6UytupXtj6AYUgDt~2a9kzhTg9IojdnhK35kD0qgaLKImOmqEOIBIc44QbP22cdMHBVz-ZbT44z5554IMMw9as1LshXgOjXwTOmJKvaCmhZKzjsT94pazWYdSTpsvVgMCTYuxQ__',
			title: 'The wall new Balenciaga.com',
			description:
				'This article is floated online with an aim to help you find the best dvd printing solution. Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.',
			linkText: 'See Case Study',
		},
		{
			id: 2,
			commentProps: {
				mainText:
					'“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems.',
				imgURL:
					'https://s3-alpha-sig.figma.com/img/a4e4/aad8/c2e39cc451db84dd951cf513f2e4c67a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TlE7Lswmb5FRAjxs5fLRf7fRVLqBJuWfg0NCUDA2LU0bi~uw8GF5-Na~0hIChwe65mjkHHBO~UWz3a1BhWjhvkaKIT05WwlAn1AexEYeGn6IIeQV8~4lQI2f0uXypI5HUi45LoyptWNKp0PJmwu-LAUpvw9o1hvKHxnjfWu-hXbvmNnHXycaHSe3pwkC2FZAD8D4uu-Uth1Qo6AVGT5yaACOO~LnDxd-dKCzcjsYMrAONMON6Aw9~VcsEWGp29jbZZCaYgPsTmDL9Y8Bl9recSYsI6FlKXo1dEQemyt4FJEzckedqv5o75yFgn6qn~ao3dZ~U6brC7SI5zqT8zBPjw__',
				name: 'Lina Hart',
				position: 'Founder & CEO, Jico',
			},
			imgURL:
				'https://s3-alpha-sig.figma.com/img/3702/664c/b1793a73efc31121a2b23668760926ab?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rf7falbyR873s0G3QkUGzy6gzqdA-jXaF2y5623gjqg5e5Ftc847TrELXMsUF~u2N--B1uL459zQvxJr799p165Yd8h1GiPW1U3CYczqMgki6ZhWyzBpJPHD83jN3cp07BEhL5711C0yW9MtPSG0DqzJ0SbK9AJl22kTUNI0P6n2x5saLNydTA00Q2m6twv48E2oErjoNsz9Dtwh8li1OT9E5HKsWWTvvOaZT1r0-70YI-NV3fJnH94D2lhJiJgIo1gykBIddxM5Kl8WxNamU8UZZowGKuYlt8MtFZb2anCB44ewIDk6BH0gHh021LYNu0uuou1jLMt6VdjUQajrUw__',
			title: 'Is this the future of 3D model?',
			description:
				'While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings that drive our love of astronomy and our desire to learn more and more about it.',
			linkText: 'See Case Study',
		},
		{
			id: 3,
			commentProps: {
				mainText:
					'“Exhibit Systems is not a provider. They are not a supplier. They are a partner with expertise in making trade shows effective.”',
				imgURL:
					'https://s3-alpha-sig.figma.com/img/557e/d292/7f80e5e60a82fcf4f78bd3152c718417?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NngSsKJwFVsfXioSrfGykjws3iGdZ5YFMGn66GDjxcASDxl0AYz1HX7xB-AjsZqS4nfigZ27wyLl53YyG2RjhaJG9MEsw~LrcjubsUS8rhZrJZMrrRHQZwMXGbC-No2WKcuOQ5g99hN7Vm~XA8wjZ71ARGhTRG8s04XjIRZIP1HmsqyVB1kQP3L4P1-5L-6cA3kLB93RSDfo86PzwS4yZEdK1W949pk3wueY6n-z6kCXM60lV6ngKCZg0Ddu~fTPtv4hDx~HtoXeBNM8SF2rxdyZIxNWwACdRVBYcARBvu5EwnZwcn~tKvp4qt3kQ4iGOku3tuafJge8CVtLJ5r24A__',
				name: 'Eunice Oliver',
				position: 'Founder & CEO, Zeem',
			},
			imgURL:
				'https://s3-alpha-sig.figma.com/img/3750/b08a/b537284ac865811096daafaf4491e93a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=igk3TDzYdXoKOTWUcYPksDEaPFE9SWmUdR7BWDol01SJrksSEbbtpIlGLVgU02UGF9wNBMcEh~ujXfDHP4Kf71lAqR1CaPl63FU06v4SVTAVG36A6sYJcYBdjCDWwsjSKfUKKwq~uXgqrcyir0mAKkKk2myJUIrMsBj8pQ4r1DwPWfpd93R16Jr3SF4Q48eh7SMSHZLu-rRJHpPuKjNPW0PwLJTqFyuMxegRDA2hxPulVjVYhZrJLiosjqIOfow6~q4XH1vd~IyaOVW66zRigqnBFSvSY851tla53GXxIaiD-of8bmlYto8yYrngq4O2fqf8hv2CgfRCA-2VsfeBGQ__',
			title: 'Is this the future of Online Booking',
			description:
				'You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make.',
			linkText: 'See Case Study',
		},
	],
}))
