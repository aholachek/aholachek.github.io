import React from 'react'
import Link from 'gatsby-link'

const links = ['code', 'portfolio', 'talks & articles']
function renderLinks(path) {
  return links.map(l => {
    return (
      <div>
        <Link to={`/${l.split(' ').slice(-1)[0]}`}>{l}</Link>
      </div>
    )
  })
}

const Header = ({ path }) => {
  return (
    <nav className="header">
      <div>
        <Link to="/">
          <svg className="home-icon" role="img" viewBox="0 0 1000 1000">
            <path
              id="path"
              style={{
                opacity: 1,
                vectorEffect: 'none',
                fillOpacity: 1
              }}
              d=" M 503 50C 524 51 543 62 558 76C 558 76 968 486 968 486C 974 493 983 502 983 517C 982 531 974 540 968 547C 968 547 908 607 908 607C 900 615 888 622 875 622C 875 622 875 879 875 879C 875 900 870 920 856 935C 841 949 821 954 800 954C 800 954 600 954 600 954C 582 954 574 946 566 938C 558 930 550 921 550 904C 550 904 550 754 550 754C 550 754 450 754 450 754C 450 754 450 904 450 904C 450 921 442 930 434 938C 426 946 417 954 400 954C 400 954 200 954 200 954C 179 954 159 949 144 935C 130 920 125 900 125 879C 125 879 125 622 125 622C 112 622 100 615 92 607C 92 607 32 547 32 547C 26 540 18 531 17 517C 17 502 26 493 32 486C 32 486 125 394 125 394C 125 394 125 104 125 104C 125 90 136 79 150 79C 150 79 325 79 325 79C 339 79 350 90 350 104C 350 104 350 169 350 169C 350 169 442 76 442 76C 457 62 476 51 497 50C 498 50 499 50 500 50C 501 50 502 50 503 50C 503 50 503 50 503 50M 478 112C 478 112 343 247 343 247C 327 262 300 251 300 229C 300 229 300 129 300 129C 300 129 175 129 175 129C 175 129 175 404 175 404C 175 411 172 417 168 422C 168 422 73 517 73 517C 73 517 125 569 125 569C 125 569 147 546 147 546C 147 546 467 226 467 226C 474 220 483 212 496 211C 498 211 499 211 500 211C 501 211 502 211 504 211C 517 212 526 220 533 226C 533 226 853 546 853 546C 853 546 875 569 875 569C 875 569 927 517 927 517C 927 517 522 112 522 112C 514 103 506 100 500 100C 494 100 486 103 478 112C 478 112 478 112 478 112M 183 582C 178 587 176 589 175 590C 175 590 175 589 175 594C 175 594 175 879 175 879C 175 893 178 898 180 899C 181 901 186 904 200 904C 200 904 396 904 396 904C 396 904 398 904 399 903C 400 902 400 900 400 900C 400 900 400 754 400 754C 400 741 405 728 414 718C 424 709 437 704 450 704C 450 704 550 704 550 704C 563 704 576 709 586 718C 595 728 600 741 600 754C 600 754 600 900 600 900C 600 900 600 902 601 903C 602 904 604 904 604 904C 604 904 800 904 800 904C 814 904 819 901 820 899C 822 898 825 893 825 879C 825 879 825 594 825 594C 825 589 825 590 825 590C 824 589 822 587 817 582C 817 582 500 264 500 264C 500 264 183 582 183 582"
            />
          </svg>
          <span className="sr-only">Alex Holachek's website</span>
        </Link>
      </div>
      <div className="links">{renderLinks(path)}</div>
    </nav>
  )
}

export default Header
