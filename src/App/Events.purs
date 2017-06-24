module App.Events where

-------------
-- Imports --
-------------

import Prelude

import App.State (State(..))
import App.Routes (Route, match)

import Control.Monad.Eff.Class (liftEff)

import DOM (DOM)
import DOM.Event.Event (preventDefault)
import DOM.HTML (window)
import DOM.HTML.History (DocumentTitle(..), URL(..), pushState)
import DOM.HTML.Types (HISTORY)
import DOM.HTML.Window (history)

import Data.Foreign (toForeign)
import Data.Maybe (Maybe(..))
import Network.HTTP.Affjax (AJAX)

import Pux (EffModel, noEffects)
import Pux.DOM.Events (DOMEvent)

------------
-- Events --
------------

data Event
  = PageView Route
  | Navigate String DOMEvent

type AppEffects fx = (ajax :: AJAX | fx)

----------------
-- Transducer --
----------------

foldp :: forall fx.
         Event
      -> State
      -> EffModel State Event ( history :: HISTORY
                              , dom     :: DOM
                              | fx
                              )

foldp (PageView newRoute) (State state) =
  noEffects <<< State $ state { route = newRoute }

foldp (Navigate url event) state =
  { state: state
  , effects: [
      liftEff do
        preventDefault event
        historyState <- history =<< window
        pushState (toForeign {}) (DocumentTitle "") (URL url) historyState
        pure <<< Just <<< PageView $ match url
    ]
  }
