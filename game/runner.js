window.onload = function() {

    Scenes.start(3)
        .then(function(x) {
            Scenes.snow().then(function(x) {
                Scenes.skate().then(function(x) {
                    Scenes.walk().then(function(x) {
                        Scenes.game().then(function(x) {
                            Scenes.end().then(function(x) {})
                        })
                    })
                })
            })
        })

    
}
