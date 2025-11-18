import SectionReveal from './SectionReveal'

export default function RevealWrapper({ children, className }) {
  return (
    <SectionReveal className={className}>
      {children}
    </SectionReveal>
  )
}
