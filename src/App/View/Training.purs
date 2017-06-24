module App.View.Training where

import App.Events (Event)
import App.Routes (TrainingRoute(..))

import App.View.Training.Elixir as ElixirView

import Pux.DOM.HTML (HTML)

view :: TrainingRoute -> HTML Event
view Elixir = ElixirView.view
view _      = ElixirView.view
