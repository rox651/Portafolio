import { ExperienceInfo } from "@/types";
import { FaBusinessTime } from "react-icons/fa";

const ExperienceCard = ({ experience }: { experience: ExperienceInfo }) => {
	const { position, company, description, date } = experience;

	return (
		<li className="mb-10 ms-8">
			<span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-900  ring-8 ring-gray-900">
				<FaBusinessTime aria-hidden className="h-3.5 w-3.5 text-white " />
			</span>
			<h3 className="font-dela text-xl font-medium lg:text-3xl">{position}</h3>
			<h4 className=" text-lg font-normal lg:text-xl">{company}</h4>
			<time className="mt-1 block text-base  font-normal text-gray-300">
				{date}
			</time>
			<p className="mt-2 text-sm text-white/90 lg:text-base">{description}</p>
		</li>
	);
};

export default ExperienceCard;
