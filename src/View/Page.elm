module View.Page exposing (page)

import Html exposing (Html)

import Router.Route exposing (Route(..))
import Signal exposing (Signal)

import View.Page.Home exposing (homePage)
import View.Page.Navigation exposing (navigationPage)
import View.Page.NotFound exposing (notFoundPage)

import View.Page.Code exposing (codePage)
import View.Page.Design exposing (designPage)

-- import View.Page.About exposing (aboutPage)
-- import View.Page.Contact exposing (contactPage)
-- import View.Page.Portfolio exposing (portfolioPage)

type alias Page = Html Signal

page : Route -> Page
page route =
  case route of
    Home       -> homePage
    _          -> notFoundPage
    -- Navigation -> navigationPage
    -- NotFound   -> notFoundPage

    -- Code       -> codePage
    -- Design     -> designPage

    -- About      -> aboutPage
    -- Contact    -> contactPage
    -- Portfolio  -> portfolioPage
