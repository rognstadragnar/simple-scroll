'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    settings: {
        duration: 50,
        minSpeed: 3,
        maxSpeed: 15
    },
    setSettings: function setSettings() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { duration: this.settings.duration, minSpeed: this.settings.minSpeed, maxSpeed: this.settings.maxSpeed };

        this.settings.duration = opts.duration;
        this.settings.minSpeed = opts.minSpeed > 1 ? opts.minSpeed : 1;
        this.settings.maxSpeed = opts.maxSpeed;
    },
    px: function px(pixels) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;

        if (pixels !== 0) scrollFunc(pixels, duration, this.settings.minSpeed, this.settings.maxSpeed);
    },
    vh: function vh(viewportHeight) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;

        var amount = window.innerHeight * (viewportHeight / 100);
        if (amount !== 0) scrollFunc(amount, duration, this.settings.minSpeed, this.settings.maxSpeed);
    },
    vw: function vw(viewportWidth) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;

        var amount = window.innerWidth * (viewportWidth / 100);
        if (amount !== 0) scrollFunc(amount, duration, this.settings.minSpeed, this.settings.maxSpeed);
    },
    percent: function percent(actualPercent) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;

        var amount = document.body.scrollHeight * (actualPercent / 100);
        if (amount !== 0) scrollFunc(amount, duration, this.settings.minSpeed, this.settings.maxSpeed);
    },
    element: function element(elementById) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.settings.duration;


        var whereTo = document.getElementById(elementById);
        if (whereTo) {
            var amount = whereTo.getBoundingClientRect().top - offset;
            if (amount !== 0) scrollFunc(amount, duration, this.settings.minSpeed, this.settings.maxSpeed);
        }
    },
    toTop: function toTop() {
        var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.settings.duration;

        var amount = -window.scrollY;
        if (amount !== 0) scrollFunc(amount, duration, this.settings.minSpeed, this.settings.maxSpeed);
    },
    toBottom: function toBottom() {
        var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.settings.duration;

        var amount = document.body.scrollHeight - window.scrollY;
        if (amount !== 0) scrollFunc(amount, duration, this.settings.minSpeed, this.settings.maxSpeed);
    },
    internalLinks: function internalLinks() {
        var _this = this;

        var internalLinks = document.querySelectorAll("a[href^='#']");

        var _loop = function _loop(i) {
            internalLinks[i].addEventListener('click', function (e) {
                e.preventDefault();
                _this.element(internalLinks[i].getAttribute('href').split('#')[1], _this.settings.duration, _this.settings.minSpeed, _this.settings.maxSpeed);
            });
        };

        for (var i = 0; i < internalLinks.length; i++) {
            _loop(i);
        }
    }
};

function scrollFunc(amount) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var minSpeed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var maxSpeed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 15;

    var initialPos = window.scrollY,
        goal = initialPos + amount;
    var speed = void 0;
    if (amount > 0) {
        (function () {
            if (amount / duration <= minSpeed) {
                speed = minSpeed;
            } else if (amount / duration >= maxSpeed) {
                speed = maxSpeed;
            } else {
                speed = amount / duration;
            }
            var scrolling = setInterval(function () {
                var currentPos = window.scrollY;
                if (window.scrollY < goal && document.body.scrollHeight - window.innerHeight !== window.scrollY) {
                    currentPos += speed;
                    window.scrollTo(0, currentPos);
                } else {
                    clearInterval(scrolling);
                }
            }, 5);
        })();
    } else if (amount < 0) {
        (function () {
            if (amount / duration >= -minSpeed) {
                speed = -minSpeed;
            } else if (amount / duration <= -maxSpeed) {
                speed = -maxSpeed;
            } else {
                speed = amount / duration;
            }

            var scrolling = setInterval(function () {
                var currentPos = window.scrollY;
                if (currentPos > goal && window.scrollY !== 0) {
                    currentPos += speed;
                    window.scrollTo(0, currentPos);
                } else {
                    clearInterval(scrolling);
                }
            });
        })();
    }
}

var px = exports.px = function px(pixels) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    if (pixels !== 0) {
        scrollFunc(pixels, duration);
    }
};

var vh = exports.vh = function vh(viewportHeight) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    var amount = window.innerHeight * (viewportHeight / 100);
    if (amount !== 0) {
        (function () {
            var initialPos = window.scrollY,
                goal = initialPos + amount;
            var speed = void 0;
            if (amount / duration <= 3) {
                speed = 3;
            } else if (amount / duration >= 4) {
                speed = 4;
            } else {
                speed = amount / duration;
            }
            if (amount > 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (window.scrollY < goal && document.body.scrollHeight - window.innerHeight !== window.scrollY) {
                            currentPos += speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            } else if (amount < 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (currentPos > goal && window.scrollY !== 0) {
                            currentPos -= speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            }
        })();
    }
};

var vw = exports.vw = function vw(viewportWidth) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    lool();
    var amount = window.innerWidth * (viewportWidth / 100);
    if (amount !== 0) {
        (function () {
            var initialPos = window.scrollY,
                goal = initialPos + amount;
            var speed = void 0;
            if (amount / duration <= 3) {
                speed = 3;
            } else if (amount / duration >= 4) {
                speed = 4;
            } else {
                speed = amount / duration;
            }
            if (amount > 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (window.scrollY < goal && document.body.scrollHeight - window.innerHeight !== window.scrollY) {
                            currentPos += speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            } else if (amount < 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (currentPos > goal && window.scrollY !== 0) {
                            currentPos -= speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            }
        })();
    }
};

var percent = exports.percent = function percent(actualPercent) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    var amount = document.body.scrollHeight * (actualPercent / 100);
    if (amount !== 0) {
        (function () {
            var initialPos = window.scrollY,
                goal = initialPos + amount;
            var speed = void 0;
            if (amount / duration <= 3) {
                speed = 3;
            } else if (amount / duration >= 4) {
                speed = 4;
            } else {
                speed = amount / duration;
            }
            if (amount > 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (window.scrollY < goal && document.body.scrollHeight - window.innerHeight !== window.scrollY) {
                            currentPos += speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            } else if (amount < 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (currentPos > goal && window.scrollY !== 0) {
                            currentPos -= speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            }
        })();
    }
};

var element = exports.element = function element(elementById) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

    var whereTo = document.getElementById(elementById);
    if (whereTo) {
        var amount = whereTo.getBoundingClientRect().top - offset;
        if (amount !== 0) {
            (function () {
                var initialPos = window.scrollY,
                    goal = initialPos + amount;
                var speed = void 0;
                if (amount / duration <= 3) {
                    speed = 3;
                } else if (amount / duration >= 4) {
                    speed = 4;
                } else {
                    speed = amount / duration;
                }
                if (amount > 0) {
                    (function () {
                        var scrolling = setInterval(function () {
                            var currentPos = window.scrollY;
                            if (window.scrollY < goal && document.body.scrollHeight - window.innerHeight !== window.scrollY) {
                                currentPos += speed;
                                window.scrollTo(0, currentPos);
                            } else {
                                clearInterval(scrolling);
                            }
                        });
                    })();
                } else if (amount < 0) {
                    (function () {
                        var scrolling = setInterval(function () {
                            var currentPos = window.scrollY;
                            if (currentPos > goal && window.scrollY !== 0) {
                                currentPos -= speed;
                                window.scrollTo(0, currentPos);
                            } else {
                                clearInterval(scrolling);
                            }
                        });
                    })();
                }
            })();
        }
    }
};

var toTop = exports.toTop = function toTop() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    var amount = -window.scrollY;
    if (amount !== 0) {
        (function () {
            var initialPos = window.scrollY,
                goal = initialPos + amount;
            var speed = void 0;
            if (amount / duration <= 3) {
                speed = 3;
            } else if (amount / duration >= 4) {
                speed = 4;
            } else {
                speed = amount / duration;
            }
            if (amount > 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (window.scrollY < goal && document.body.scrollHeight - window.innerHeight !== window.scrollY) {
                            currentPos += speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            } else if (amount < 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (currentPos > goal && window.scrollY !== 0) {
                            currentPos -= speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            }
        })();
    }
};

var toBottom = exports.toBottom = function toBottom() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    var amount = document.body.scrollHeight - window.scrollY;
    if (amount !== 0) {
        (function () {
            var initialPos = window.scrollY,
                goal = initialPos + amount;
            var speed = void 0;
            if (amount / duration <= 3) {
                speed = 3;
            } else if (amount / duration >= 4) {
                speed = 4;
            } else {
                speed = amount / duration;
            }
            if (amount > 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (window.scrollY < goal && document.body.scrollHeight - window.innerHeight !== window.scrollY) {
                            currentPos += speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            } else if (amount < 0) {
                (function () {
                    var scrolling = setInterval(function () {
                        var currentPos = window.scrollY;
                        if (currentPos > goal && window.scrollY !== 0) {
                            currentPos -= speed;
                            window.scrollTo(0, currentPos);
                        } else {
                            clearInterval(scrolling);
                        }
                    });
                })();
            }
        })();
    }
};

var internalLinks = exports.internalLinks = function internalLinks() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    var internalLinks = document.querySelectorAll("a[href^='#']");
    var element = function element(elementById) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

        var whereTo = document.getElementById(elementById);
        if (whereTo) {
            var amount = whereTo.getBoundingClientRect().top - offset;
            if (amount !== 0) {
                (function () {
                    var initialPos = window.scrollY,
                        goal = initialPos + amount;
                    var speed = void 0;
                    if (amount / duration <= 3) {
                        speed = 3;
                    } else if (amount / duration >= 4) {
                        speed = 4;
                    } else {
                        speed = amount / duration;
                    }
                    if (amount > 0) {
                        (function () {
                            var scrolling = setInterval(function () {
                                var currentPos = window.scrollY;
                                if (window.scrollY < goal && document.body.scrollHeight - window.innerHeight !== window.scrollY) {
                                    currentPos += speed;
                                    window.scrollTo(0, currentPos);
                                } else {
                                    clearInterval(scrolling);
                                }
                            });
                        })();
                    } else if (amount < 0) {
                        (function () {
                            var scrolling = setInterval(function () {
                                var currentPos = window.scrollY;
                                if (currentPos > goal && window.scrollY !== 0) {
                                    currentPos -= speed;
                                    window.scrollTo(0, currentPos);
                                } else {
                                    clearInterval(scrolling);
                                }
                            });
                        })();
                    }
                })();
            }
        }
    };

    var _loop2 = function _loop2(i) {
        internalLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            element(internalLinks[i].getAttribute('href').split('#')[1], offset, duration);
        });
    };

    for (var i = 0; i < internalLinks.length; i++) {
        _loop2(i);
    }
};