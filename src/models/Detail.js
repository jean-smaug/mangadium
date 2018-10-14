import { types, flow, getParent } from 'mobx-state-tree'
import { bool } from 'prop-types'

import { MangaDetail, MangaDetailPropTypes } from './Manga'
import request from '../utils/request'

export const DetailPropTypes = {
  manga: MangaDetailPropTypes,
  isOpen: bool.isRequired
}

export const Detail = types
  .model({
    manga: types.maybeNull(MangaDetail),
    isOpen: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggleVisibilityStatus () {
      self.isOpen = !self.isOpen
    },
    setManga: flow(function * (id) {
      const appStore = getParent(self).app

      try {
        appStore.toggleLoadingStatus()

        const manga = yield request.getManga(id)
        const images = yield request.getMangaPictures(id)
        self.manga = { ...manga, images }

        appStore.toggleLoadingStatus()
        self.toggleVisibilityStatus()
      } catch (error) {
        appStore.toggleLoadingStatus()
        appStore.pushError(
          'Je ne peux pas charger le détail de ce manga, surrement la faute du back'
        )
      }
    })
  }))
