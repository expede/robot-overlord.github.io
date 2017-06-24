"use strict";
var Control_Category = require("../Control.Category");

// | A `Bifunctor` is a `Functor` from the pair category `(Type, Type)` to `Type`.

// |

// | A type constructor with two type arguments can be made into a `Bifunctor` if

// | both of its type arguments are covariant.

// |

// | The `bimap` function maps a pair of functions over the two type arguments

// | of the bifunctor.

// |

// | Laws:

// |

// | - Identity: `bimap id id == id`

// | - Composition: `bimap f1 g1 <<< bimap f2 g2 == bimap (f1 <<< f2) (g1 <<< g2)`

// |
var Bifunctor = function (bimap) {
    this.bimap = bimap;
};

// | A `Bifunctor` is a `Functor` from the pair category `(Type, Type)` to `Type`.

// |

// | A type constructor with two type arguments can be made into a `Bifunctor` if

// | both of its type arguments are covariant.

// |

// | The `bimap` function maps a pair of functions over the two type arguments

// | of the bifunctor.

// |

// | Laws:

// |

// | - Identity: `bimap id id == id`

// | - Composition: `bimap f1 g1 <<< bimap f2 g2 == bimap (f1 <<< f2) (g1 <<< g2)`

// |
var bimap = function (dict) {
    return dict.bimap;
};

// | Map a function over the first type argument of a `Bifunctor`.
var lmap = function (dictBifunctor) {
    return function (f) {
        return bimap(dictBifunctor)(f)(Control_Category.id(Control_Category.categoryFn));
    };
};

// | Map a function over the second type arguments of a `Bifunctor`.
var rmap = function (dictBifunctor) {
    return bimap(dictBifunctor)(Control_Category.id(Control_Category.categoryFn));
};
module.exports = {
    Bifunctor: Bifunctor, 
    bimap: bimap, 
    lmap: lmap, 
    rmap: rmap
};