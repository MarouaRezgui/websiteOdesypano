export default function Article({ title, body, link, rtl }) {
    return (
        <a href={link} dir={`${rtl ? "rtl" : "ltr"}`} className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 m-auto ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-500">{body}</p>
        </a>
    )
}

Article.defaultProps = {
    title: 'Untitled',
    body: 'no description!',
    link: '#',
};