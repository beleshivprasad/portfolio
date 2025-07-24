'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Projects
				</motion.h2>

				<div className="space-y-16">
					{/* Dubai Technologies Project */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Low-Code/No-Code Platform</h3>
										<p className="text-gray-400">
											Empowered users to visually build and deploy web apps through a drag-and-drop UI and rule-based workflow system, minimizing the need for manual coding.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend & UX</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Form Builder with Drag-and-Drop UI</li>
												<li>• Dynamic Field Rendering & Validation</li>
												<li>• Workflow Sequence Designer</li>
												<li>• Reusable Modular Components</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Core Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Redux Toolkit State Management</li>
												<li>• TypeScript + React Query Integration</li>
												<li>• Ant Design Component System</li>
												<li>• DnD Kit for Layout Interactions</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Outcomes</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Reduced app development time by 60%</li>
											<li>• Enabled non-dev users to create deployable apps</li>
											<li>• Scaled builder UI with seamless drag-drop feedback</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Builder UI Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Drag-and-Drop Form Builder (React + DnD Kit)
												</text>
											</g>
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Component Schema Generator (Redux Toolkit)
												</text>
											</g>
											<g>
												<rect x="20" y="140" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="165" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Workflow Manager (Drag Logic & Validation)
												</text>
											</g>
											<g>
												<rect x="20" y="200" width="360" height="40" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
												<text x="200" y="225" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Live App Renderer (React Components)
												</text>
											</g>
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="200" y1="120" x2="200" y2="140" />
												<line x1="200" y1="180" x2="200" y2="200" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Coffee Curtain Up Project */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Coffee Curtain Up – Event Management Suite</h3>
										<p className="text-gray-400">
											Built and deployed three interconnected apps for managing events, venues, news, and media for a major New York City cultural event.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">API & Backend</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Node.js + Express REST API</li>
												<li>• AWS S3 & Google Drive Uploads</li>
												<li>• SES Email Notifications</li>
												<li>• MongoDB with Mongoose Models</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Platform Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Event/Venue/User Management</li>
												<li>• News Content Syndication</li>
												<li>• Analytics via Google Analytics</li>
												<li>• Admin Dashboard with Role Control</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Impact Highlights</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Delivered end-to-end platform in 6 weeks</li>
											<li>• Enabled 5K+ attendees to RSVP seamlessly</li>
											<li>• Reused 80% of code across all three apps</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Microservice Overview</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											<g>
												<rect x="20" y="20" width="110" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="145" y="20" width="110" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="270" y="20" width="110" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="75" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">User API</text>
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">Event API</text>
												<text x="325" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">Upload API</text>
											</g>
											<g>
												<rect x="20" y="100" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="100" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="125" textAnchor="middle" className="fill-gray-400 text-[12px]">MongoDB (Event, User)</text>
												<text x="295" y="125" textAnchor="middle" className="fill-gray-400 text-[12px]">AWS S3 / Google Drive</text>
											</g>
											<g>
												<rect x="105" y="180" width="190" height="40" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
												<text x="200" y="205" textAnchor="middle" className="fill-gray-400 text-[12px]">
													SES Email Notifications
												</text>
											</g>
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="75" y1="60" x2="75" y2="100" />
												<line x1="200" y1="60" x2="200" y2="100" />
												<line x1="325" y1="60" x2="325" y2="100" />
												<line x1="200" y1="140" x2="200" y2="180" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
