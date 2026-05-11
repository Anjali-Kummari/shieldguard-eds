/**
 * ShieldGuard — CTA Banner Block
 *
 * Document table format:
 * | CTA Banner  |                              |
 * | Heading     | Ready to switch…             |
 * | Subtext     | Join over 500,000…           |
 * | Button text | Get Started Today            |
 * | Button href | /#quote                      |
 */
export default function decorate(block) {
  const rows = [...block.children];
  const get  = (i) => rows[i]?.children[1]?.textContent.trim();
  const href = rows[3]?.children[1]?.querySelector('a')?.href;

  const heading = get(0) || 'Ready to switch to smarter insurance?';
  const subtext = get(1) || 'Join over 500,000 policyholders who trust ShieldGuard for their protection.';
  const btnText = get(2) || 'Get Started Today';
  const btnHref = href  || '/#quote';

  block.innerHTML = `
    <div class="cta-banner-inner">
      <h2>${heading}</h2>
      <p>${subtext}</p>
      <a href="${btnHref}" class="btn btn-ghost-white btn-lg">${btnText}</a>
    </div>`;
}
