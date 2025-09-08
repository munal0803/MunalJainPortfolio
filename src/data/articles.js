import React from "react";

function Article1() {
	return {
		date: "8 March 2025",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Cloud Benefits",
			"Cloud Flexibility",
			"Business Cloud Adoption",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				max-width: 700px;
				margin: 0 auto;
				line-height: 1.6;
			}
			.randImage {
				align-self: center;
				border-radius: 8px;
				outline: 2px solid #ddd;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						Cloud computing has revolutionized the way organizations manage
						their IT infrastructure. Instead of investing heavily in physical
						servers and maintenance, businesses can now scale resources on
						demand, paying only for what they use.
					</p>
					<p>
						One of the biggest advantages of cloud adoption is{" "}
						<strong>cost efficiency</strong>. Companies no longer need to worry
						about hardware depreciation or unexpected server downtime. Cloud
						providers handle infrastructure, allowing teams to focus on
						innovation.
					</p>
					<p>
						Flexibility is another key benefit. Whether it’s supporting remote
						teams, handling seasonal traffic spikes, or running
						resource-intensive applications, the cloud enables businesses to
						respond quickly without significant upfront investment.
					</p>
					<img
						src="https://picsum.photos/600/400"
						alt="cloud computing"
						className="randImage"
					/>
					<p>
						As more companies embrace digital transformation, cloud computing is
						becoming the foundation for modern IT strategies, offering{" "}
						<strong>security, scalability, and agility</strong> in a
						competitive landscape.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function Article2() {
	return {
		date: "7 May 2025",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		keywords: [
			"Artificial Intelligence in Healthcare",
			"AI Healthcare",
			"Healthcare Technology",
			"AI in Medicine",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				max-width: 700px;
				margin: 0 auto;
				line-height: 1.6;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						Artificial Intelligence (AI) is rapidly changing the healthcare
						landscape. From diagnosing diseases earlier to personalizing
						treatment plans, AI is enabling medical professionals to provide
						better and faster care.
					</p>
					<p>
						<strong>Medical Imaging:</strong> AI algorithms can now detect
						abnormalities in X-rays, CT scans, and MRIs with remarkable
						accuracy, helping radiologists identify conditions that might be
						overlooked.
					</p>
					<p>
						<strong>Drug Discovery:</strong> The use of AI has accelerated the
						drug development process, allowing researchers to predict potential
						drug compounds and simulate their effectiveness, saving years of
						research.
					</p>
					<p>
						<strong>Patient Care:</strong> AI-driven chatbots and virtual
						assistants provide patients with instant responses to common health
						questions, medication reminders, and appointment scheduling,
						improving access to healthcare.
					</p>
					<p>
						While challenges such as data privacy and ethical considerations
						remain, the future of AI in healthcare looks promising. By combining
						technology with human expertise, AI has the potential to redefine
						healthcare delivery worldwide.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [Article1, Article2];

export default myArticles;
