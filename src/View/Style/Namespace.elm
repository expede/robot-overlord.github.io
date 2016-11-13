module View.Style.Namespace exposing (namespace, id, class, classList)

import Html.CssHelpers exposing (withNamespace)

namespace : String
namespace = "overlord"

{id, class, classList} = Html.CssHelpers.withNamespace namespace
