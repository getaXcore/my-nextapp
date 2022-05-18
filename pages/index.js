import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'
import Date from '../components/date';

export async function getStaticProps(){
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-black
  first-letter:mr-3 first-letter:float-left">
                    Hello, my name&apos;s {' '}
                    <span className="relative">
                        <span className="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
                        <span className="relative text-white">Taufan Septaufani</span>
                    </span>
                    {' '}I&apos;m software engineer. I&apos;m learning React with Next.js.
                </p>
                <p>
                   This is my first project with Next.js. Step by step from Next.js documentation to build this project. Now I know it&apos;s easy to create this. I will learn more...
                </p>
            </section><br />
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <div>
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                            <h2 className="h-6 w-9 text-white">Blog</h2>
                        </span>
                    </div>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({id, date, title}) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{title}</a>
                                </Link>                            
                                <br />
                                <small className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    );
}