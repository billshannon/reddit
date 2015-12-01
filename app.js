var app = angular.module("redditApp", ['ngAnimate', 'angularMoment']);

app.controller("RedditController", ['$scope', function ($scope) {
    $scope.showForm = false;
    $scope.posts = [{
        title: 'Whangarei, New Zealand',
        description: 'Whangarei is the northernmost city in New Zealand and the regional capital of Northland Region. It is part of the Whangarei District, a local body created in 1989 to administer both the city proper and its hinterland.',
        author: 'Tim Swaan',
        time: 'Mon Nov 28 2015 18:34:55 GMT-0700 (MST)',
        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1775',
        comments: [{
            author: 'Niranjan Shankar',
            content: 'Immensely thought out! I wonder what would have happened if I made this'
        }, {author: 'Thierno Glenn', content: 'I\'m in!'}],
        votes: 0
    },

        {
            title: 'Camden Town, London',
            description: 'Camden Town, often shortened to Camden, is an inner city district of London, 2.4 miles north of the centre of London. It is one of the 35 major centres identified in the London Plan',
            author: 'Yanko Peyankov',
            time: 'Fri May 07, 2015 10:39:24 GMT-0700 (MST)',
            image: 'https://images.unsplash.com/photo-1448974508364-2253ef37ad41?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=52fb144be6dcaaca4b2e082cff898927',
            comments: [{author: 'Russell Perez', content: "I think I'm crying. It's that sublime."}],
            votes: 0
        },

        {
            title: 'Blue Canyon-Nyack Airport, Alta, CA',
            description: 'An airport is an aerodrome with facilities for flights to take off and land. Airports often have facilities to store and maintain aircraft, and a control tower. An airport consists of a landing area, which comprises an aerially accessible open space including at least one operationally active surface such as a runway for a plane to take off or a helipad, and often includes adjacent utility buildings such as control towers, hangars and terminals. Larger airports may have fixed base operator services, airport aprons, air traffic control centres, passenger facilities such as restaurants and lounges, and emergency services.',
            author: 'JD Weiher',
            time: 'Tue Sep 20, 2015 09:44:55 GMT-0700 (MST)',
            image: 'https://images.unsplash.com/photo-1448925991746-4f7924890578?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=d8ccfd636cef54517c549ed4ee6b2fc9',
            comments: [{
                author: 'Munny Hu',
                content: 'My 38 year old niece rates this shot very slick!!'
            }, {
                author: 'Ralph Decker',
                content: 'Minimal! I like the use of layout and blur!'
            }, {author: 'Tabitha Canty', content: 'Gorgeous animation m8'}],
            votes: 0
        },

        {
            title: 'Daytona Beach, FL',
            description: 'Daytona Beach is a city in Volusia County, Florida, United States. It lies about 51 miles northeast of Orlando, 86 miles southeast of Jacksonville, and 242 miles northwest of Miami. In the 2010 U.S. Census, it had a population of 61,005.',
            author: 'Darrell Cassell',
            time: 'Tues Dec 01 2015 11:39:24 GMT-0700 (MST)',
            image: 'https://images.unsplash.com/photo-1448814100339-234df1d4005d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=441656cf828e87a01646c681895e8495',
            comments: [{author: 'Iska Deguzman', content: 'Such style, many playfulness, so delightful'}],
            votes: 0
        }];
    $scope.submitPost = function () {
        $scope.showForm = ($scope.showForm === true) ? false : true;
    }
    $scope.showCommentForm = function () {
        $scope.commentForm = ($scope.commentForm === true) ? false : true;
    }
    $scope.addPost = function (isValid) {
        if (isValid) {
            $scope.newPost = {
                title: this.title,
                description: this.description,
                author: this.author,
                time: new Date(),
                comments: [],
                image: this.image,
                votes: 0
            };
            $scope.posts.push($scope.newPost);
            $scope.showForm = false;
        }
    }
    $scope.submitComment = function () {
        $scope.submitted = true;
        var comment = {
            author: this.commentAuthor,
            content: this.commentBody
        }
        this.post.comments.push(comment);
        this.commentAuthor = '';
        this.commentBody = '';
        this.commentForm = !this.commentForm;
    }
    $scope.select = function (item) {
        $scope.selectedItem = item;
    }

}])