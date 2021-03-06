module.exports = {
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	moduleNameMapper: {
		'^@/components(.*)$': '<rootDir>/components$1',
		'^@/redux(.*)$': '<rootDir>/redux$1',
		'^@/icons(.*)$': '<rootDir>/icons$1',
	}
}