/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PlaylistService } from "../playlist.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlaylistCreateInput } from "./PlaylistCreateInput";
import { Playlist } from "./Playlist";
import { PlaylistFindManyArgs } from "./PlaylistFindManyArgs";
import { PlaylistWhereUniqueInput } from "./PlaylistWhereUniqueInput";
import { PlaylistUpdateInput } from "./PlaylistUpdateInput";
import { PlaylistTrackFindManyArgs } from "../../playlistTrack/base/PlaylistTrackFindManyArgs";
import { PlaylistTrack } from "../../playlistTrack/base/PlaylistTrack";
import { PlaylistTrackWhereUniqueInput } from "../../playlistTrack/base/PlaylistTrackWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlaylistControllerBase {
  constructor(
    protected readonly service: PlaylistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Playlist })
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPlaylist(
    @common.Body() data: PlaylistCreateInput
  ): Promise<Playlist> {
    return await this.service.createPlaylist({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Playlist] })
  @ApiNestedQuery(PlaylistFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async playlists(@common.Req() request: Request): Promise<Playlist[]> {
    const args = plainToClass(PlaylistFindManyArgs, request.query);
    return this.service.playlists({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Playlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async playlist(
    @common.Param() params: PlaylistWhereUniqueInput
  ): Promise<Playlist | null> {
    const result = await this.service.playlist({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Playlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePlaylist(
    @common.Param() params: PlaylistWhereUniqueInput,
    @common.Body() data: PlaylistUpdateInput
  ): Promise<Playlist | null> {
    try {
      return await this.service.updatePlaylist({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Playlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePlaylist(
    @common.Param() params: PlaylistWhereUniqueInput
  ): Promise<Playlist | null> {
    try {
      return await this.service.deletePlaylist({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/playlistTracks")
  @ApiNestedQuery(PlaylistTrackFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PlaylistTrack",
    action: "read",
    possession: "any",
  })
  async findPlaylistTracks(
    @common.Req() request: Request,
    @common.Param() params: PlaylistWhereUniqueInput
  ): Promise<PlaylistTrack[]> {
    const query = plainToClass(PlaylistTrackFindManyArgs, request.query);
    const results = await this.service.findPlaylistTracks(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        playlist: {
          select: {
            id: true,
          },
        },

        track: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/playlistTracks")
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "update",
    possession: "any",
  })
  async connectPlaylistTracks(
    @common.Param() params: PlaylistWhereUniqueInput,
    @common.Body() body: PlaylistTrackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playlistTracks: {
        connect: body,
      },
    };
    await this.service.updatePlaylist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/playlistTracks")
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "update",
    possession: "any",
  })
  async updatePlaylistTracks(
    @common.Param() params: PlaylistWhereUniqueInput,
    @common.Body() body: PlaylistTrackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playlistTracks: {
        set: body,
      },
    };
    await this.service.updatePlaylist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/playlistTracks")
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "update",
    possession: "any",
  })
  async disconnectPlaylistTracks(
    @common.Param() params: PlaylistWhereUniqueInput,
    @common.Body() body: PlaylistTrackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playlistTracks: {
        disconnect: body,
      },
    };
    await this.service.updatePlaylist({
      where: params,
      data,
      select: { id: true },
    });
  }
}
