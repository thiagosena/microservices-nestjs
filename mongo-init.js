db.createUser(
	{
		user: "nestjs",
		pwd: "nestjs",
		roles: [
			{
				role: "readWrite",
				db: "nestjs_main"
			}
		]
	}
);