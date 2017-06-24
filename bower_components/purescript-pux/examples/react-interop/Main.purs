module ReactInteropExample where

import Prelude hiding (div)
import Control.Monad.Eff (Eff)
import Data.Monoid (mempty)
import Pux (CoreEffects, FoldP, start)
import Pux.DOM.HTML (HTML)
import Pux.Renderer.React (renderToDOM)
import ReactInteropExample.ReactComponent (component)
import Text.Smolder.HTML (div, h1)
import Text.Smolder.Markup (text)

type State = Unit

data Event = Event

foldp :: ∀ fx. FoldP State Event fx
foldp event state = { state, effects: [] }

view :: State -> HTML Event
view state =
  div do
    h1 $ text "Rendered by PureScript"
    component { message: "Rendered by external React component" } mempty

main :: ∀ fx. Eff (CoreEffects fx) Unit
main = do
  app <- start
    { initialState: unit
    , view
    , foldp
    , inputs: []
    }

  renderToDOM "#app" app.markup app.input
