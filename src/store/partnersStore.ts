import { create } from 'zustand'
import { PartnerLogo } from '../types'

interface PartnersLogoStor {
	partnersLogo: PartnerLogo[]
	addLogo: (newLogo: PartnerLogo) => void
}

export const usePartnersLogo = create<PartnersLogoStor>((set, get) => ({
	partnersLogo: [
		{
			id: 1,
			url: 'https://s3-alpha-sig.figma.com/img/d8ed/9a85/6160e7c30eb80617e7a53cfbdc361d73?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LqSvzmvsPWVHwbFj9ulBGVoZ4R5rpmy-JnzUAT-hnLuHwoGmh6EAnM6f05lRCF4ovRKE3fafCkHt4ek095dVQRadTOPS6bV7VagWD8odUPb7pq7E8rQVLaIPRsfuXsOeOiKUHrLUQ50-Qlt8wOlvyCVnnZn2RplnOhf2jTDkNbnzEcZKY~ogbNf6dHBpWY9ONxOQFKVKR6glhipwrSCBzDzCB9H~q7BwljuCtWXSjqaK~TnNxQIQMBkMMHrsU-7BaLVW~qiG-OxjG-Hvej9CaWk6Ho3zGIde8gnwtNRl3eVsgPqb2qn6Bil6iBd9f3TDJfBW0LGyk5y7X4MV5dUJ5Q__',
		},
		{
			id: 2,
			url: 'https://s3-alpha-sig.figma.com/img/2d10/0f44/2108deabe2882c788d472c2c7270441e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HY-ChFo5BzcRJVOFoWEKolpZnLQGzeDrYE~QWZR20h8Ryh2FENw044P8qRjVp0S9Q5jyFfINzrhrsh9xjJ84iPJR-bToBuTUoskoUOES5OBlYakdRxorhsazkDl~eXauVeX3ua5fZ2-DFGCg~BIj92aMLZmkXPIwZFu14GEe1jHUVDtgkXSVsRxjQhcECL1oNVpuqnnBClsXvNIIxHxe7~EzitVFNjBya7JQLx3pBoX7txfpcG9GM-mSQ8HLrFZF7qijcgUeu2eSc1mCkMngPw1wGsuZ5BvLzmiBLlW7ThisovnD4T2nbvROgmTwApKVYQqPh2UNN7AgvA0yEXGzwg__',
		},
		{
			id: 3,
			url: 'https://s3-alpha-sig.figma.com/img/7897/3dcf/2a9fa0c0e546150b0fcfa968b19d8331?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i6VeI-w3yGXrHABgMZGDG44xLKllvSahCo~TYq36psCIp2o0Dan-Mxmaxrr2vKSJP4r-Xm0rE9XXdo3ttr10f2w8fk4~eedLkjL6kpDBcGcNoShD92qI5AddJ0Icbwx5sTq~6RsOnM0McOmQnusqFR-1hW1IGd2uB3GPgkM~yfV6hFSBafybdDlbld87~SioXqxJZ1IqbbWYDDHBh6hMUFlHMs8JxxAAq6TNFjXS1J4yKtm~ONFfVvCX4FcfGJyvTiCuu1S1~dUVxy-1f-4Tnoro~HjSvSSulCvaJmbwjz-nBEIc-Fctn5dFUbr2n97hIpeFmYZscmEHZDnYxlQzHw__',
		},
		{
			id: 4,
			url: 'https://s3-alpha-sig.figma.com/img/127d/8717/1443e56d9d47eae4908db9da6edb61f5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BN3BJ5ni5wCRPZ4MEGTG-UCLKjVQtGEg03c63mnR76m4bcEG~d0~PIcG4Xwq8cG2Ww2u2hZJy~M6DNocoMeQlGZSIw8HxEg48AR5v828VmkXM10sCUEK2xH2Jjj3ExozS1GnmYzf0aduZiU~eK4G6SuJ-DNMssY31Da93tRO82Ttr71l0d-vcEW5BDZyx8-KPjB8N4jTurg5rZCjoCPxJjMqNpNzlBum3XrokIIC7GOA1ecNlGmaAYGEffV5ThFnHbqye08hlOfopzSUhmTRsxPSZTKm~VZqberYefx-XH~hjYGtysUnUfCnty8~LOVHWOVzgfxKAcHbFkMkLix2xA__',
		},
		{
			id: 5,
			url: 'https://s3-alpha-sig.figma.com/img/bb6b/a65e/0408195ad7ae20e37b9e6a634e55bd30?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lGpDmgnsLyhwonUS1AN-4Mti3bWvVV11AFtPzy7y-BcUrX2~9toA0Yg8nEPSMR2kUr3RAXEpz9fdFlAi-oW8zUl2-b17gmlrjOCTwjFdg4AM0GfbjerWqEAJe8iPhrjVh0nWanxL2r0eKRjTd6t~K-jG3wXzjBKX~0vZOHIufEvzH5ujqMaAO-O1L11AbgGVEC618PjS9P2ij65Ma~9yhmpzQyb~nZaoWNKPzEjVbPt57S6vWdxxlRJpgfJ40xeqFEkl44UUGMkROZJvk1J0m54Ou3WhrxDeZkFePqUsNnDNyDGC3eY64KPEcU4MSgeixdUM3KjIvoEGHi9RIUMcBg__',
		},
	],

	addLogo: (newLogo: PartnerLogo) => {
		set({ partnersLogo: [...get().partnersLogo, newLogo] })
	},
}))
