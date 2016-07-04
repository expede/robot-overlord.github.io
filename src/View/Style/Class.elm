module View.Style.Class exposing (Class(..), class, classList)

import Html exposing (Attribute)
import View.Style.Namespace as NS

type Class
  = Logo
  | FillPage
  | FillViewport

class : List a -> Attribute b
class = NS.class

classList : List (a, Bool) -> Attribute a
classList = NS.classList
