export interface TestResult {
	id: string;
	userContestId: string;
	testId: string;
	passed: boolean;
	pointsEarned: number;
	attempts: number;
	failureDetails?: string;
	viewed: boolean;
	timestamp: Date;
}

export interface Test {
	id: string;
	chapterId: string;
	description: string;
	points: number;
	difficulty: 'EASY' | 'MEDIUM' | 'HARD';
	isLockedOnFail: boolean;
	unlockCost: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface Chapter {
	id: string;
	contestId: string;
	name: string;
	uuid: string;
	order: number;
	description?: string;
	totalTests: number;
	minPassThreshold: number;
	testFileS3Key?: string;
	testFileHash?: string;
	testFileStatus: 'NONE' | 'QUEUED' | 'GENERATING' | 'READY' | 'FAILED';
	testFileError?: string;
	testFileVersion: number;
	expectations?: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Contest {
	id: string;
	status: 'DRAFT' | 'UPCOMING' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
	name: string;
	description?: string;
	prdUrl?: string;
	prdText?: string;
	organizerId: string;
	rulesJson?: any;
	startDate?: Date;
	endDate?: Date;
	isTimed: boolean;
	publishedAt?: Date;
	latestPublishJobId?: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserContest {
	id: string;
	userId: string;
	contestId: string;
	totalPoints: number;
	currentChapter: number;
	completedAt?: Date;
	createdAt: Date;
	updatedAt: Date;
}

export interface ContestPublishJob {
	id: string;
	contestId: string;
	status: 'PENDING' | 'GENERATING' | 'COMPLETED' | 'FAILED';
	totalChapters: number;
	completedChapters: number;
	failedChapters: number;
	startedAt?: Date;
	finishedAt?: Date;
	lastError?: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface LeaderboardEntry {
	id: string;
	contestId: string;
	userId: string;
	totalPoints: number;
	rank: number;
	updatedAt: Date;
}

export interface ContestConfig {
	contestId: string;
	participantId: string;
	apiEndpoint: string;
	s3Bucket: string;
	chapters: Chapter[];
}
