window.FORMULA_REFERENCE = [
  { group: 'Algebra', items: [
    ['Quadratic formula', 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}'],
    ['Discriminant', '\\Delta=b^2-4ac'],
    ['Difference of squares', 'a^2-b^2=(a-b)(a+b)'],
    ['Binomial theorem', '(a+b)^n=\\sum_{k=0}^n\\binom{n}{k}a^{n-k}b^k'],
    ['Remainder theorem', 'P(x)\\text{ divided by }(x-r)\\text{ leaves }P(r)'],
    ['Vieta (quadratic)', 'r_1+r_2=-\\frac ba,\\quad r_1r_2=\\frac ca']
  ]},
  { group: 'Exponents & logs', items: [
    ['Exponent laws', 'a^ma^n=a^{m+n},\\quad (a^m)^n=a^{mn}'],
    ['Change of base', '\\log_a b=\\frac{\\ln b}{\\ln a}'],
    ['Continuous growth', 'A=Pe^{rt}'],
    ['Geometric sum', 'S_n=a\\frac{1-r^n}{1-r},\\quad S_\\infty=\\frac a{1-r}']
  ]},
  { group: 'Sequences & series', items: [
    ['Arithmetic sequence', 'a_n=a_1+(n-1)d'],
    ['Arithmetic sum', 'S_n=\\frac n2(a_1+a_n)'],
    ['Arithmetic variance', '\\sigma^2=\\frac{d^2(n^2-1)}{12}'],
    ['Recursive sequences', '\\text{look for a fixed point }L=f(L)']
  ]},
  { group: 'Trigonometry', items: [
    ['Pythagorean identity', '\\sin^2x+\\cos^2x=1'],
    ['Angle addition', '\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b'],
    ['Cosine addition', '\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b'],
    ['Tangent addition', '\\tan(a+b)=\\frac{\\tan a+\\tan b}{1-\\tan a\\tan b}'],
    ['Double angle', '\\sin2x=2\\sin x\\cos x,\\quad \\cos2x=1-2\\sin^2x'],
    ['Law of sines', '\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}'],
    ['Law of cosines', 'c^2=a^2+b^2-2ab\\cos C']
  ]},
  { group: 'Triangle geometry', items: [
    ['Heron’s formula', 'K=\\sqrt{s(s-a)(s-b)(s-c)},\\quad s=\\frac{a+b+c}{2}'],
    ['Brahmagupta’s formula', 'K=\\sqrt{(s-a)(s-b)(s-c)(s-d)}\\quad\\text{(cyclic quadrilateral)}'],
    ['Triangle area', 'K=\\frac12ab\\sin C'],
    ['Angle-bisector length', 'l=\\frac{2ab\\cos(C/2)}{a+b}'],
    ['Median length', 'm_a=\\frac12\\sqrt{2b^2+2c^2-a^2}'],
    ['Stewart’s theorem', 'b^2m+c^2n=a(d^2+mn)']
  ]},
  { group: 'Coordinate & vector geometry', items: [
    ['Distance', 'd=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}'],
    ['Midpoint', 'M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)'],
    ['Dot product', '\\mathbf u\\cdot\\mathbf v=|u||v|\\cos\\theta'],
    ['Cross-product area', '|\\mathbf u\\times\\mathbf v|=|u||v|\\sin\\theta'],
    ['Point-plane distance', 'd=\\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}'],
    ['Scalar triple product', 'V=\\frac16|\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)|']
  ]},
  { group: 'Conics & calculus', items: [
    ['Circle', '(x-h)^2+(y-k)^2=r^2'],
    ['Ellipse', '\\frac{(x-h)^2}{a^2}+\\frac{(y-k)^2}{b^2}=1,\\quad c^2=a^2-b^2'],
    ['Parabola', '(y-k)^2=4p(x-h)'],
    ['Derivative definition', "f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}h"],
    ['Power rule', '\\frac{d}{dx}x^n=nx^{n-1}'],
    ['Fundamental theorem', '\\int_a^b f(x)\\,dx=F(b)-F(a)']
  ]},
  { group: 'Combinatorics & probability', items: [
    ['Permutations', 'P(n,r)=\\frac{n!}{(n-r)!}'],
    ['Combinations', '\\binom nr=\\frac{n!}{r!(n-r)!}'],
    ['Stars and bars', '\\#=\\binom{n+k-1}{k-1}'],
    ['Inclusion–exclusion', '|A\\cup B|=|A|+|B|-|A\\cap B|'],
    ['Conditional probability', 'P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}'],
    ['Expected value', 'E[X]=\\sum_x xP(X=x)']
  ]},
  { group: 'Complex numbers & matrices', items: [
    ['Complex modulus', '|a+bi|=\\sqrt{a^2+b^2}'],
    ['Polar form', 'z=r(\\cos\\theta+i\\sin\\theta)'],
    ['De Moivre', '(r\\,\\mathrm{cis}\\,\\theta)^n=r^n\\,\\mathrm{cis}(n\\theta)'],
    ['2×2 determinant', '\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc'],
    ['Matrix inverse', 'A^{-1}=\\frac1{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}']
  ]},
  { group: 'Area & volume', items: [
    ['Circle area / circumference', 'A=\\pi r^2,\\quad C=2\\pi r'],
    ['Sector area', 'A=\\frac12r^2\\theta\\quad(\\theta\\text{ in radians})'],
    ['Arc length', 's=r\\theta\\quad(\\theta\\text{ in radians})'],
    ['Prism / cylinder', 'V=Bh,\\quad V=\\pi r^2h'],
    ['Pyramid / cone', 'V=\\frac13Bh,\\quad V=\\frac13\\pi r^2h'],
    ['Sphere', 'V=\\frac43\\pi r^3,\\quad A=4\\pi r^2']
  ]}
];
