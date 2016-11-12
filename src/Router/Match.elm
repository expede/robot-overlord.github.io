module Router.Match exposing (matchers)

import Router.Route exposing (Route(..))
import UrlParser exposing(Parser, format, oneOf, s)

-- homeMatcher : Parser (a -> result) result
homeMatcher = format Home (s "")

-- navigationMatcher : Parser (a -> result) result
navigationMatcher = format Navigation (s "navigate")

-- codeMatcher : PathMatcher Route
-- codeMatcher = match1 Code "/code"

-- designMatcher : PathMatcher Route
-- designMatcher = match1 Design "/design"

-- aboutMatcher : PathMatcher Route
-- aboutMatcher = match1 About "/about"

-- contactMatcher : PathMatcher Route
-- contactMatcher = match1 Contact "/contact"

-- portfolioMatcher : PathMatcher Route
-- portfolioMatcher = match1 Portfolio "/portfolio"

-- notFoundMatcher : PathMatcher Route
-- notFoundMatcher = match1 NotFound "/404"

-- matchers : Int -- List (PathMatcher Route)
matchers =
    oneOf
  [ homeMatcher
  , navigationMatcher

  -- , codeMatcher
  -- , designMatcher

  -- , aboutMatcher
  -- , contactMatcher
  -- , portfolioMatcher
  ] -- display404Page
