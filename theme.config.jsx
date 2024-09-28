export default {
  footer: <a className="nx-mt-24 nx-block" href="/">Rhino Linux Blog</a>,
  head: ({ title, meta }) => (
    <>
      <meta property="og:title" content={title || 'Rhino Linux Blog'} />
      <meta name="description" content={meta.description || 'Ubuntu Based, Rolling Release'} />
      <meta property="og:description" content={meta.description || 'Ubuntu Based, Rolling Release'} />
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  darkMode: true,
  navs: [
    {
      url: 'https://rhinolinux.org',
      name: 'Homepage'
    },
    {
      url: 'https://wiki.rhinolinux.org',
      name: 'Wiki'
    }
  ]
}