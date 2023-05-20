import { Noto_Sans_KR, Fira_Code, Raleway, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })
const raleway = Raleway({ subsets: ['latin'] })
const notosans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
})
const firecode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export { inter, raleway, notosans, firecode }
