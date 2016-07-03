module Router.Match exposing (matchers)

import Hop.Types exposing (PathMatcher)
import Hop.Matchers exposing (match1)

import Router.Route exposing (Route(..))

homeMatcher : PathMatcher Route
homeMatcher = match1 Home ""

navigationMatcher : PathMatcher Route
navigationMatcher = match1 Navigation ""

codeMatcher : PathMatcher Route
codeMatcher = match1 Code "/code"

designMatcher : PathMatcher Route
designMatcher = match1 Design "/design"

aboutMatcher : PathMatcher Route
aboutMatcher = match1 About "/about"

contactMatcher : PathMatcher Route
contactMatcher = match1 Contact "/contact"

portfolioMatcher : PathMatcher Route
portfolioMatcher = match1 Portfolio "/portfolio"

notFoundMatcher : PathMatcher Route
notFoundMatcher = match1 NotFound "/404"

matchers : List (PathMatcher Route)
matchers =
  [ homeMatcher
  , navigationMatcher

  , codeMatcher
  , designMatcher

  , aboutMatcher
  , contactMatcher
  , portfolioMatcher
  ] -- display404Page
