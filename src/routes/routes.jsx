import App from "../App";
import ErrorPage from "../routes/ErrorScreen";
import Home from "../pages/home/Home";
import Radio from "../pages/radio/Radio";
import { createBrowserRouter } from "react-router-dom";
import Story from "../pages/home/stories/imageStories";
import Reels from "../components/reels/reels";
import { Gaon_Tv } from "../pages/gaon-tv/Gaon_Tv";
import { Gaon_Broadcast } from "../pages/gaon-broadcast/Gaon_Broad";
import { Gaon_Audio } from "../pages/gaon-audio/Gaon_Audio";
 import Daily from "../pages/daily-life/daily";
 import Social from "../pages/social-life/social";
 import Challenge from "../pages/challenges/challenges";
 import Gardening from "../pages/gardnening/gardening";
 import Blogs from "../pages/blogs/blogs";
 import ChangeMaker from "../pages/changeMaker/changeMaker";
import SingleGardening from "../pages/blogs/SingleGardening";
import SingleSocial from "../pages/blogs/SingleSocial";
import SingleChallenge from "../pages/blogs/SingleChallenge";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/story",
				element: <Story />,
			},
			{
				path: "/radio",
				element: <Radio />,
			},
			{
				path: "/reels",
				element: <Reels />,
			},
			{
				path: "/gaon-tv",
				element: <Gaon_Tv />,
			},
			{
				path: "/gaon-broadcast",
				element: <Gaon_Broadcast />,
			},
			{
				path: "/gaon-audio",
				element: <Gaon_Audio />,
			},
			{
				path:"/daily-life",
				element:<Daily/>
			},
			{
				path:"/social-life",
				element:<Social/>
			},
			{
				path:"/social-life-item/:id",
				element:<SingleSocial/>
			},
			{
				path: "/challenges",
				element: <Challenge />
			},
			{
				path: "/challenges-item/:id",
				element: <SingleChallenge />
			},
			{
				path:"/gardening",
				element:<Gardening/>
			},
			{
				path:'/change-maker',
				element:<ChangeMaker />
			},
			{
				path:"/blogs/:id",
				element:<Blogs/>
			},
			{
				path:"/garndening-item/:id",
				element:<SingleGardening />
			}
		],
	},
]);
