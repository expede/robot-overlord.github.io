module View.Style.Id exposing (Id(..), id)

import View.Style.Namespace

type Id
  = NavBar
  | GlobalHeader
  | GobalFooter

id = View.Style.Namespace.id
