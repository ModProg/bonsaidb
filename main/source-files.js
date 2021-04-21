var N = null;var sourcesIndex = {};
sourcesIndex["circulate"] = {"name":"","files":["lib.rs"]};
sourcesIndex["pliantdb"] = {"name":"","files":["cli.rs","lib.rs"]};
sourcesIndex["pliantdb_client"] = {"name":"","dirs":[{"name":"client","files":["remote_database.rs","websocket_worker.rs","worker.rs"]}],"files":["client.rs","error.rs","lib.rs"]};
sourcesIndex["pliantdb_core"] = {"name":"","dirs":[{"name":"document","files":["revision.rs"]},{"name":"schema","dirs":[{"name":"view","files":["map.rs"]}],"files":["collection.rs","mod.rs","names.rs","schematic.rs","view.rs"]}],"files":["connection.rs","document.rs","lib.rs","limits.rs","networking.rs","pubsub.rs","test_util.rs","transaction.rs"]};
sourcesIndex["pliantdb_jobs"] = {"name":"","dirs":[{"name":"manager","files":["jobs.rs","managed_job.rs"]}],"files":["lib.rs","manager.rs","task.rs","traits.rs"]};
sourcesIndex["pliantdb_local"] = {"name":"","dirs":[{"name":"views","files":["integrity_scanner.rs","mapper.rs"]}],"files":["backup.rs","config.rs","error.rs","lib.rs","open_trees.rs","storage.rs","tasks.rs","views.rs"]};
sourcesIndex["pliantdb_server"] = {"name":"","dirs":[{"name":"admin","files":["database.rs","mod.rs"]},{"name":"cli","files":["certificate.rs","mod.rs","serve.rs"]}],"files":["async_io_util.rs","config.rs","error.rs","hosted.rs","lib.rs","server.rs","test_util.rs"]};
createSourceSidebar();
