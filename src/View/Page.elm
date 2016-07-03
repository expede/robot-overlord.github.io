module View.Page exposing (page)

import Html exposing (Html)

import Router.Route exposing (Route(..))
import Signal exposing (Signal)

import View.Page.Home exposing (home)
import View.Page.Navigation exposing (navigation)
import View.Page.NotFound exposing (notFound)

import View.Page.Code exposing (code)
import View.Page.Design exposing (design)

-- import View.Page.About exposing (about)
-- import View.Page.Contact exposing (contact)
-- import View.Page.Portfolio exposing (portfolio)

type alias Page = Html Signal

page : Route -> Page
page route =
  case route of
    Home       -> home
    Navigation -> navigation
    -- NotFound   -> notFound

    Code       -> code
    Design     -> design

    -- About      -> about
    -- Contact    -> contact
    -- Portfolio  -> portfolio
