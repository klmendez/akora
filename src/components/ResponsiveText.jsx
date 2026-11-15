export default function ResponsiveText({ short, children }) {
  return <><span className="desktop-copy">{children}</span><span className="mobile-copy">{short}</span></>
}
